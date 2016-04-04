"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DictateoftheTwinGodsBase = require("../setJOU/DictateoftheTwinGods.js");

class DictateoftheTwinGods extends DictateoftheTwinGodsBase {
  constructor(game) {
    super(game, "Dictate of the Twin Gods", "Launch Parties", "pLPA");
  }
}

module.exports = DictateoftheTwinGods;
