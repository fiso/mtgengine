"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerritorialBalothBase = require("../setBFZ/TerritorialBaloth.js");

class TerritorialBaloth extends TerritorialBalothBase {
  constructor(game) {
    super(game, "Territorial Baloth", "Zendikar", "ZEN");
  }
}

module.exports = TerritorialBaloth;
