"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuanYus1000LiMarchBase = require("../setME3/GuanYus1000LiMarch.js");

class GuanYus1000LiMarch extends GuanYus1000LiMarchBase {
  constructor(game) {
    super(game, "Guan Yu's 1,000-Li March", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = GuanYus1000LiMarch;
