"use strict";
const Constants = require ("../../../Constants");
const ThranDynamoBase = require("../setIMA/ThranDynamo");

class ThranDynamo extends ThranDynamoBase {
  constructor (game) {
    super(game, "Thran Dynamo", "World Championship Decks 2000", "WC00");
  }
}

module.exports = ThranDynamo;
