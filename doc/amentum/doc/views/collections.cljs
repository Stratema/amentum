(ns amentum.doc.views.collections
  (:require
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.modules :as m]
   [amentum.doc.core :refer [example]]
   [amentum.doc.data :refer [countries-nv genders]]))

(h/defelem form [])
(h/defelem grid [])
(h/defelem menu [])
