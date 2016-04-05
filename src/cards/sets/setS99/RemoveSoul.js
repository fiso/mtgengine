"use strict";
const Constants = require ("../../../Constants");
const RemoveSoulBase = require("../setCHR/RemoveSoul");

class RemoveSoul extends RemoveSoulBase {
  constructor(game) {
    super(game, "Remove Soul", "Starter 1999", "S99");
  }
}

module.exports = RemoveSoul;
