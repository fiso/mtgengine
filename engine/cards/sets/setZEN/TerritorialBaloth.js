"use strict";
const Constants = require ("../../../Constants");
const TerritorialBalothBase = require("../setBFZ/TerritorialBaloth");

class TerritorialBaloth extends TerritorialBalothBase {
  constructor(game) {
    super(game, "Territorial Baloth", "Zendikar", "ZEN");
  }
}

module.exports = TerritorialBaloth;
