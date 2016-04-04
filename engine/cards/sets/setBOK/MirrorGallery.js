"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorGallery extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Gallery", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MirrorGallery;
