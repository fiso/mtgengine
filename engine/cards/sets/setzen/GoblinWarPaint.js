"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarPaintBase = require("../setBFZ/GoblinWarPaint.js");

class GoblinWarPaint extends GoblinWarPaintBase {
  constructor(game) {
    super(game, "Goblin War Paint", "Zendikar", "ZEN");
  }
}

module.exports = GoblinWarPaint;
