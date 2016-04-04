"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorEntity extends Card {
  constructor(game) {
    super(game, "Mirror Entity", "Commander 2013 Edition", "C13");
  }
}

module.exports = MirrorEntity;
