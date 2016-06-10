"use strict";
const Constants = require ("../../../Constants");
const RemoveSoulBase = require("../setCHR/RemoveSoul");

class RemoveSoul extends RemoveSoulBase {
  constructor (game) {
    super(game, "Remove Soul", "Eighth Edition", "8ED");
  }
}

module.exports = RemoveSoul;
