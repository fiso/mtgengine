"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrownoftheAgesBase = require("../set5ED/CrownoftheAges.js");

class CrownoftheAges extends CrownoftheAgesBase {
  constructor(game) {
    super(game, "Crown of the Ages", "Ice Age", "ICE");
  }
}

module.exports = CrownoftheAges;
