"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodthirstyOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodthirsty Ogre", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodthirstyOgre;
