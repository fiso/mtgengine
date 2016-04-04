"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DictateofKruphixBase = require("../setJOU/DictateofKruphix.js");

class DictateofKruphix extends DictateofKruphixBase {
  constructor(game) {
    super(game, "Dictate of Kruphix", "Magic Game Day", "pMGD");
  }
}

module.exports = DictateofKruphix;
