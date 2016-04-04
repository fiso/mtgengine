"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XiraArienBase = require("../setCHR/XiraArien.js");

class XiraArien extends XiraArienBase {
  constructor(game) {
    super(game, "Xira Arien", "Masters Edition III", "ME3");
  }
}

module.exports = XiraArien;
