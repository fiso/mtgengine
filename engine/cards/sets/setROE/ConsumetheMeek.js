"use strict";
const Constants = require ("../../../Constants");
const ConsumetheMeekBase = require("../setDDP/ConsumetheMeek");

class ConsumetheMeek extends ConsumetheMeekBase {
  constructor(game) {
    super(game, "Consume the Meek", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConsumetheMeek;
