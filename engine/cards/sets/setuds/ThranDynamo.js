"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThranDynamoBase = require("../setARC/ThranDynamo.js");

class ThranDynamo extends ThranDynamoBase {
  constructor(game) {
    super(game, "Thran Dynamo", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranDynamo;
