"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndexBase = require("../setAPC/Index.js");

class Index extends IndexBase {
  constructor(game) {
    super(game, "Index", "Ninth Edition", "9ED");
  }
}

module.exports = Index;
