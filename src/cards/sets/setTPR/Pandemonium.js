"use strict";
const Constants = require ("../../../Constants");
const PandemoniumBase = require("../setEXO/Pandemonium");

class Pandemonium extends PandemoniumBase {
  constructor(game) {
    super(game, "Pandemonium", "Tempest Remastered", "TPR");
  }
}

module.exports = Pandemonium;
