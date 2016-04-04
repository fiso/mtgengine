"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarPaintBase = require("../setBFZ/GoblinWarPaint.js");

class GoblinWarPaint extends GoblinWarPaintBase {
  constructor(game) {
    super(game, "Goblin War Paint", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GoblinWarPaint;
