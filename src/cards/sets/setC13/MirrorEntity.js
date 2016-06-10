"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorEntity extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Entity", "Commander 2013 Edition", "C13");
  }
}

module.exports = MirrorEntity;
