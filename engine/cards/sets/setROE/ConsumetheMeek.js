"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConsumetheMeekBase = require("../setDDP/ConsumetheMeek.js");

class ConsumetheMeek extends ConsumetheMeekBase {
  constructor(game) {
    super(game, "Consume the Meek", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConsumetheMeek;
