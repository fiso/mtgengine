"use strict";
const Constants = require ("../../../Constants");
const EerieInterludeBase = require("../setDDQ/EerieInterlude");

class EerieInterlude extends EerieInterludeBase {
  constructor (game) {
    super(game, "Eerie Interlude", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EerieInterlude;
