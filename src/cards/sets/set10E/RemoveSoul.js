"use strict";
const Constants = require ("../../../Constants");
const RemoveSoulBase = require("../setCHR/RemoveSoul");

class RemoveSoul extends RemoveSoulBase {
  constructor(game) {
    super(game, "Remove Soul", "Tenth Edition", "10E");
  }
}

module.exports = RemoveSoul;
