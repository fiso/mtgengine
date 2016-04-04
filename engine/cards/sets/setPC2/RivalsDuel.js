"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RivalsDuelBase = require("../setMOR/RivalsDuel.js");

class RivalsDuel extends RivalsDuelBase {
  constructor(game) {
    super(game, "Rivals' Duel", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = RivalsDuel;
