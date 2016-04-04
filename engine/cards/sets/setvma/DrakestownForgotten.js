"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrakestownForgottenBase = require("../setCNS/DrakestownForgotten.js");

class DrakestownForgotten extends DrakestownForgottenBase {
  constructor(game) {
    super(game, "Drakestown Forgotten", "Vintage Masters", "VMA");
  }
}

module.exports = DrakestownForgotten;
