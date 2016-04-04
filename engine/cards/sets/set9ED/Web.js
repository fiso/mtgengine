"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WebBase = require("../setCED/Web.js");

class Web extends WebBase {
  constructor(game) {
    super(game, "Web", "Ninth Edition", "9ED");
  }
}

module.exports = Web;
