"use strict";
const Constants = require ("../../../Constants");
const ThranDynamoBase = require("../setARC/ThranDynamo");

class ThranDynamo extends ThranDynamoBase {
  constructor(game) {
    super(game, "Thran Dynamo", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranDynamo;
