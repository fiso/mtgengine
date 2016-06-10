"use strict";
const Constants = require ("../../../Constants");
const DictateofKruphixBase = require("../setJOU/DictateofKruphix");

class DictateofKruphix extends DictateofKruphixBase {
  constructor (game) {
    super(game, "Dictate of Kruphix", "Magic Game Day", "pMGD");
  }
}

module.exports = DictateofKruphix;
