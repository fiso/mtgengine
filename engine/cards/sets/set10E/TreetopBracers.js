"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreetopBracersBase = require("../setNMS/TreetopBracers.js");

class TreetopBracers extends TreetopBracersBase {
  constructor(game) {
    super(game, "Treetop Bracers", "Tenth Edition", "10E");
  }
}

module.exports = TreetopBracers;
