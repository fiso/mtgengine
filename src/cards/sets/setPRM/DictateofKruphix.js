"use strict";
const Constants = require ("../../../Constants");
const DictateofKruphixBase = require("../setC18/DictateofKruphix");

class DictateofKruphix extends DictateofKruphixBase {
  constructor (game) {
    super(game, "Dictate of Kruphix", "Magic Online Promos", "PRM");
  }
}

module.exports = DictateofKruphix;
