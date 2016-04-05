"use strict";
const Constants = require ("../../../Constants");
const ThranDynamoBase = require("../setARC/ThranDynamo");

class ThranDynamo extends ThranDynamoBase {
  constructor(game) {
    super(game, "Thran Dynamo", "From the Vault: Twenty", "V13");
  }
}

module.exports = ThranDynamo;
