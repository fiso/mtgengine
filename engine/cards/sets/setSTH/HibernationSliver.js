"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HibernationSliverBase = require("../setH09/HibernationSliver.js");

class HibernationSliver extends HibernationSliverBase {
  constructor(game) {
    super(game, "Hibernation Sliver", "Stronghold", "STH");
  }
}

module.exports = HibernationSliver;
