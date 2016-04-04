"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XiraArienBase = require("../setCHR/XiraArien.js");

class XiraArien extends XiraArienBase {
  constructor(game) {
    super(game, "Xira Arien", "Legends", "LEG");
  }
}

module.exports = XiraArien;
