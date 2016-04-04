"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToweroftheMagistrate extends Card {
  constructor(game) {
    super(game, "Tower of the Magistrate", "Mercadian Masques", "MMQ");
  }
}

module.exports = ToweroftheMagistrate;
