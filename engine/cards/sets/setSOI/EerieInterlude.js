"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EerieInterludeBase = require("../setDDQ/EerieInterlude.js");

class EerieInterlude extends EerieInterludeBase {
  constructor(game) {
    super(game, "Eerie Interlude", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EerieInterlude;
