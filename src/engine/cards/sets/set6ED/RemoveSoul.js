"use strict";
const Constants = require ("../../../Constants");
const RemoveSoulBase = require("../setME3/RemoveSoul");

class RemoveSoul extends RemoveSoulBase {
  constructor (game) {
    super(game, "Remove Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RemoveSoul;
