(function() {var type_impls = {
"parking_lot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#626\">source</a><a href=\"#impl-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.remutex\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#628\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.remutex\" class=\"fn\">remutex</a>(\n    s: &amp;<a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;\n) -&gt; &amp;'a <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutex.html\" title=\"struct lock_api::remutex::ReentrantMutex\">ReentrantMutex</a>&lt;R, G, T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the original <code>ReentrantMutex</code> object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#641-643\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.map\" class=\"fn\">map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;,\n    f: F\n) -&gt; <a class=\"struct\" href=\"lock_api/remutex/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::remutex::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Makes a new <code>MappedReentrantMutexGuard</code> for a component of the locked data.</p>\n<p>This operation cannot fail as the <code>ReentrantMutexGuard</code> passed\nin already locked the mutex.</p>\n<p>This is an associated function that needs to be\nused as <code>ReentrantMutexGuard::map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_map\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#665-670\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.try_map\" class=\"fn\">try_map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"lock_api/remutex/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::remutex::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, U&gt;, <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>&gt;,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make  a new <code>MappedReentrantMutexGuard</code> for a component of the\nlocked data. The original guard is return if the closure returns <code>None</code>.</p>\n<p>This operation cannot fail as the <code>ReentrantMutexGuard</code> passed\nin already locked the mutex.</p>\n<p>This is an associated function that needs to be\nused as <code>ReentrantMutexGuard::try_map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#690-692\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.unlocked\" class=\"fn\">unlocked</a>&lt;F, U&gt;(s: &amp;mut <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;, f: F) -&gt; U<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the mutex to execute the given function.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the mutex.</p>\n</div></details></div></details>",0,"parking_lot::remutex::ReentrantMutexGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#703-704\">source</a><a href=\"#impl-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutexFair.html\" title=\"trait lock_api::mutex::RawMutexFair\">RawMutexFair</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#719\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.unlock_fair\" class=\"fn\">unlock_fair</a>(s: <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Unlocks the mutex using a fair unlock protocol.</p>\n<p>By default, mutexes are unfair and allow the current thread to re-lock\nthe mutex before another has the chance to acquire the lock, even if\nthat thread has been blocked on the mutex for a long time. This is the\ndefault because it allows much higher throughput as it avoids forcing a\ncontext switch on every mutex unlock. This can result in one thread\nacquiring a mutex many more times than other threads.</p>\n<p>However in some cases it can be beneficial to ensure fairness by forcing\nthe lock to pass on to a waiting thread if there is one. This is done by\nusing this method instead of dropping the <code>ReentrantMutexGuard</code> normally.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#734-736\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.unlocked_fair\" class=\"fn\">unlocked_fair</a>&lt;F, U&gt;(s: &amp;mut <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;, f: F) -&gt; U<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the mutex to execute the given function.</p>\n<p>The mutex is unlocked a fair unlock protocol.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the mutex.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bump\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#752\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/remutex/struct.ReentrantMutexGuard.html#tymethod.bump\" class=\"fn\">bump</a>(s: &amp;mut <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Temporarily yields the mutex to a waiting thread if there is one.</p>\n<p>This method is functionally equivalent to calling <code>unlock_fair</code> followed\nby <code>lock</code>, however it can be much more efficient in the case where there\nare no waiting threads.</p>\n</div></details></div></details>",0,"parking_lot::remutex::ReentrantMutexGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#760-761\">source</a><a href=\"#impl-Deref-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#765\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","parking_lot::remutex::ReentrantMutexGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#782-783\">source</a><a href=\"#impl-Debug-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#785\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","parking_lot::remutex::ReentrantMutexGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#770-771\">source</a><a href=\"#impl-Drop-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#774\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","parking_lot::remutex::ReentrantMutexGuard"],["<section id=\"impl-Sync-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#621-622\">source</a><a href=\"#impl-Sync-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Sync","parking_lot::remutex::ReentrantMutexGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#790-791\">source</a><a href=\"#impl-Display-for-ReentrantMutexGuard%3C'a,+R,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, G, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/remutex/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::remutex::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'a,\n    G: <a class=\"trait\" href=\"lock_api/remutex/trait.GetThreadId.html\" title=\"trait lock_api::remutex::GetThreadId\">GetThreadId</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/remutex.rs.html#793\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","parking_lot::remutex::ReentrantMutexGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()