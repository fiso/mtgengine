"use strict";
const Constants = require ("../../../Constants");
const AnarchistBase = require("../setEXO/Anarchist");

class Anarchist extends AnarchistBase {
  constructor(game) {
    super(game, "Anarchist", "Tempest Remastered", "TPR");
  }
}

module.exports = Anarchist;
