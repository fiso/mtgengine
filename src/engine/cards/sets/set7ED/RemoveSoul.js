"use strict";
const Constants = require ("../../../Constants");
const RemoveSoulBase = require("../setME3/RemoveSoul");

class RemoveSoul extends RemoveSoulBase {
  constructor (game) {
    super(game, "Remove Soul", "Seventh Edition", "7ED");
  }
}

module.exports = RemoveSoul;
