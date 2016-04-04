"use strict";
const Constants = require ("../../../Constants");
const GoblinWarPaintBase = require("../setBFZ/GoblinWarPaint");

class GoblinWarPaint extends GoblinWarPaintBase {
  constructor(game) {
    super(game, "Goblin War Paint", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GoblinWarPaint;
