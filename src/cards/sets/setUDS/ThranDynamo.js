"use strict";
const Constants = require ("../../../Constants");
const ThranDynamoBase = require("../setIMA/ThranDynamo");

class ThranDynamo extends ThranDynamoBase {
  constructor (game) {
    super(game, "Thran Dynamo", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranDynamo;
