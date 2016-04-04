"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreetopBracersBase = require("../setNMS/TreetopBracers.js");

class TreetopBracers extends TreetopBracersBase {
  constructor(game) {
    super(game, "Treetop Bracers", "Ninth Edition", "9ED");
  }
}

module.exports = TreetopBracers;
