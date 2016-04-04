"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorGallery extends Card {
  constructor(game) {
    super(game, "Mirror Gallery", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MirrorGallery;
