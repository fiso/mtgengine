"use strict";
const Constants = require ("../../../Constants");
const HeraldoftheHostBase = require("../setCM2/HeraldoftheHost");

class HeraldoftheHost extends HeraldoftheHostBase {
  constructor (game) {
    super(game, "Herald of the Host", "Legendary Cube", "PZ1");
  }
}

module.exports = HeraldoftheHost;
