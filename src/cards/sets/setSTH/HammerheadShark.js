"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerheadShark extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerhead Shark", "Stronghold", "STH");
  }
}

module.exports = HammerheadShark;
