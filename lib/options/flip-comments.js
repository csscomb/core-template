module.exports = {
    /**
     * Option's name as it should be used in config.
     */
    name: 'flip-comments',

    /**
     * List of syntaxes that this options supports.
     * This depends on Gonzales PE possibilities.
     * Currently the following work fine: css, less, sass, scss.
     */
    syntax: ['css'],

    /**
     * List patterns for option's acceptable value.
     * You can play with following:
     *   - boolean: [true, false]
     *   - string: /^panda$/
     *   - number: true
     */
    accepts: {
        boolean: [true]
    },

    /**
     * If `accepts` is not enough for you, replace it with custom `setValue`
     * function.
     *
     * @param {Object} value Value that a user sets in configuration
     * @return {Object} Value that you would like to use in `process` method
     *
     * setValue: function(value) {
     *     // Do something with initial value.
     *     var final = value * 4;
     *
     *     // Return final value you will use in `process` method.
     *     return final;
     * },
     */

    /**
     * Fun part.
     * Do something with AST.
     * For example, replace all comments with flipping tables.
     *
     * @param {String} nodeType Type of current node
     * @param {Array} node Node's content
     */
    process: function(nodeType, node) {
        if (nodeType !== 'commentML') return;

        node[0] = ' (╯°□°）╯︵ ┻━┻ ';
    }
};
