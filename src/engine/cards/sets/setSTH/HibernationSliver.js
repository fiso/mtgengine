"use strict";
const Constants = require ("../../../Constants");
const HibernationSliverBase = require("../setTPR/HibernationSliver");

class HibernationSliver extends HibernationSliverBase {
  constructor (game) {
    super(game, "Hibernation Sliver", "Stronghold", "STH");
  }
}

module.exports = HibernationSliver;
