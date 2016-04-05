"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarPaint extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin War Paint", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GoblinWarPaint;
