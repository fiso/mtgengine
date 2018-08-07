"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../set8ED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "Fifth Edition", "5ED");
  }
}

module.exports = Karma;
