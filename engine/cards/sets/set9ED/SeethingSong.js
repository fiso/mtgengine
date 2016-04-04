"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeethingSongBase = require("../setARC/SeethingSong.js");

class SeethingSong extends SeethingSongBase {
  constructor(game) {
    super(game, "Seething Song", "Ninth Edition", "9ED");
  }
}

module.exports = SeethingSong;
