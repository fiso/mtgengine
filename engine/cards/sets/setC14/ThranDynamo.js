"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThranDynamoBase = require("../setARC/ThranDynamo.js");

class ThranDynamo extends ThranDynamoBase {
  constructor(game) {
    super(game, "Thran Dynamo", "Commander 2014", "C14");
  }
}

module.exports = ThranDynamo;
