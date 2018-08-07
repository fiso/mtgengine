"use strict";
const Constants = require ("../../../Constants");
const GoblinWarPaintBase = require("../setBFZ/GoblinWarPaint");

class GoblinWarPaint extends GoblinWarPaintBase {
  constructor (game) {
    super(game, "Goblin War Paint", "Zendikar", "ZEN");
  }
}

module.exports = GoblinWarPaint;
