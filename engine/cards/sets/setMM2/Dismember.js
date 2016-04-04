"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismemberBase = require("../setpFNM/Dismember.js");

class Dismember extends DismemberBase {
  constructor(game) {
    super(game, "Dismember", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Dismember;
